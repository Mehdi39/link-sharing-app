import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, vi, test } from 'vitest';
import Login from '../app/login/page';
import { useRouter } from 'next/navigation';

// Mock Next.js useRouter to handle redirects
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: vi.fn(),
    }),
}));

// Mock components not being tested
vi.mock('next/link', () => ({
    default: ({ children }) => <div>{children}</div>,
}));

vi.mock('next/image', () => ({
    default: ({ alt }) => <img alt={alt} />,
}));

vi.mock('@/assets/images/IconMail', () => ({
    default: () => <svg data-testid="icon-mail" />,
}));

vi.mock('@/assets/images/IconPassword', () => ({
    default: () => <svg data-testid="icon-password" />,
}));

// Mock fetch
global.fetch = vi.fn();

test('renders the login page', () => {
    render(<Login />);

    // Ensure the login form is rendered
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/test@example.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});

test('shows error message when login fails', async () => {
    // Mock the fetch response to simulate login failure
    global.fetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: 'Invalid credentials' }),
    });

    render(<Login />);

    // Simulate user typing into email and password fields
    fireEvent.change(screen.getByPlaceholderText(/e.g. alex@email.com/i), {
        target: { value: 'jahid4k@gmail.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
        target: { value: 'wrongpassword' },
    });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    // Wait for error message to appear
    await waitFor(() => {
        expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
});

test('redirects to homepage on successful login', async () => {
    const router = useRouter();

    // Mock the fetch response to simulate login success
    global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({}),
    });

    render(<Login />);

    // Simulate user typing into email and password fields
    fireEvent.change(screen.getByPlaceholderText(/e.g. alex@email.com/i), {
        target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
        target: { value: 'correctpassword' },
    });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Wait for the router push to be called
    await waitFor(() => {
        expect(router.push).toHaveBeenCalledWith('/');
    });
});
