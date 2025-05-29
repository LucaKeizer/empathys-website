// tests/components/CartToast.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CartToast from '@/components/CartToast';

jest.useFakeTimers();

describe('CartToast Component', () => {
  const defaultProps = {
    isVisible: true,
    productTitle: 'Samen naar de finish',
    productImage: '/images/samen-naar-de-finish.jpg',
    quantity: 1,
    onClose: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.useFakeTimers();
  });

  test('renders when visible', () => {
    render(<CartToast {...defaultProps} />);
    
    expect(screen.getByText('Toegevoegd aan winkelwagen!')).toBeInTheDocument();
    expect(screen.getByText('Samen naar de finish')).toBeInTheDocument();
    expect(screen.getByText('€ 21,95')).toBeInTheDocument();
  });

  test('does not render when not visible', () => {
    render(<CartToast {...defaultProps} isVisible={false} />);
    
    expect(screen.queryByText('Toegevoegd aan winkelwagen!')).not.toBeInTheDocument();
  });

  test('shows quantity when greater than 1', () => {
    render(<CartToast {...defaultProps} quantity={3} />);
    
    expect(screen.getByText('3x Samen naar de finish')).toBeInTheDocument();
  });

  test('hides quantity when equal to 1', () => {
    render(<CartToast {...defaultProps} quantity={1} />);
    
    expect(screen.getByText('Samen naar de finish')).toBeInTheDocument();
    expect(screen.queryByText('1x')).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(<CartToast {...defaultProps} />);
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  test('calls onClose when "Verder winkelen" is clicked', () => {
    render(<CartToast {...defaultProps} />);
    
    const continueButton = screen.getByText('Verder winkelen');
    fireEvent.click(continueButton);
    
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  test('auto-hides after 5 seconds', () => {
    render(<CartToast {...defaultProps} />);
    
    expect(defaultProps.onClose).not.toHaveBeenCalled();
    
    // Fast-forward time by 5 seconds
    jest.advanceTimersByTime(5000);
    
    waitFor(() => {
      expect(defaultProps.onClose).toHaveBeenCalled();
    });
  });

  test('shows product image', () => {
    render(<CartToast {...defaultProps} />);
    
    const productImage = screen.getByAltText('Samen naar de finish');
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', '/images/samen-naar-de-finish.jpg');
  });

  test('has link to cart', () => {
    render(<CartToast {...defaultProps} />);
    
    const cartLink = screen.getByText('Winkelwagen');
    expect(cartLink.closest('a')).toHaveAttribute('href', '/winkelwagen');
  });

  test('has proper animation classes', () => {
    const { container } = render(<CartToast {...defaultProps} />);
    
    const toastElement = container.querySelector('[class*="translate-x"]');
    expect(toastElement).toBeInTheDocument();
  });
});