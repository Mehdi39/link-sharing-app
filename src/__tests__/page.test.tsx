import { render, screen, waitFor } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import Page from '../app/page';

// Mock components that are not under test
vi.mock('@/components/PhoneMockup', () => ({
    default: () => <div data-testid="phone-mockup">PhoneMockup</div>,
}));

vi.mock('@/components/LinksHome', () => ({
    default: () => <div data-testid="links-home">LinksHome</div>,
}));

vi.mock('@/components/Navbar', () => ({
    default: () => <nav data-testid="navbar">Navbar</nav>,
}));

// Mock fetch function
global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: 'Test Link' }]),
    })
);

// Mock the UserContext and UserProvider
vi.mock('@/context/UserContext', () => {
    return {
        useUserContext: () => ({ isAuthenticated: true }),
        UsersProvider: ({ children }) => <div>{children}</div>,  // Mock UsersProvider
    };
});

test('renders the page with links', async () => {
    render(<Page />);

    // Ensure the mock components are rendered
    expect(screen.getByTestId('phone-mockup')).toBeDefined();
    expect(screen.getByTestId('links-profile')).toBeDefined();
    expect(screen.getByTestId('navbar')).toBeDefined();

    // Check if the fetched data (links) is rendered
    await waitFor(() => {
        expect(screen.getByText('Test Link')).toBeDefined();
    });
});
