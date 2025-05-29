// tests/components/Navigation.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '@/components/Navigation';

// Mock the useCart hook
const mockUseCart = {
  state: {
    items: [],
    total: 0,
    itemCount: 0,
  },
};

jest.mock('@/contexts/CartContext', () => ({
  useCart: () => mockUseCart,
}));

// Mock usePathname
const mockPathname = '/';
jest.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
}));

describe('Navigation Component', () => {
  test('renders logo and main navigation items', () => {
    render(<Navigation />);
    
    expect(screen.getByAltText('Empathys')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Over ons')).toBeInTheDocument();
    expect(screen.getByText('Ons prentenboek')).toBeInTheDocument();
    expect(screen.getByText('Cursussen')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('shows cart with item count', () => {
    mockUseCart.state.itemCount = 3;
    
    render(<Navigation />);
    
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  test('hides cart count when empty', () => {
    mockUseCart.state.itemCount = 0;
    
    render(<Navigation />);
    
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });

  test('shows mobile menu button', () => {
    render(<Navigation />);
    
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
  });

  test('opens mobile menu when clicked', () => {
    render(<Navigation />);
    
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);
    
    // Should show mobile navigation items
    expect(screen.getAllByText('Home')).toHaveLength(2); // Desktop + mobile
  });

  test('shows dropdown for Cursussen', () => {
    render(<Navigation />);
    
    const cursussenLink = screen.getByText('Cursussen');
    
    // Hover over Cursussen to show dropdown
    fireEvent.mouseEnter(cursussenLink.parentElement!);
    
    expect(screen.getByText('Oudercursus')).toBeInTheDocument();
    expect(screen.getByText('Sova - breintraining')).toBeInTheDocument();
  });

  test('applies correct background for homepage', () => {
    const { container } = render(<Navigation />);
    
    expect(container.firstChild).toHaveClass('bg-[rgba(220,226,230,255)]');
  });

  test('applies white background for other pages', () => {
    // Mock different pathname
    jest.mocked(require('next/navigation').usePathname).mockReturnValue('/contact');
    
    const { container } = render(<Navigation />);
    
    expect(container.firstChild).toHaveClass('bg-white');
  });

  test('highlights active navigation item', () => {
    jest.mocked(require('next/navigation').usePathname).mockReturnValue('/contact');
    
    render(<Navigation />);
    
    const contactLink = screen.getByText('Contact');
    expect(contactLink).toHaveClass('text-primary-600');
  });
});