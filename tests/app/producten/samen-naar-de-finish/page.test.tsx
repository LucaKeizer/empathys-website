// tests/app/producten/samen-naar-de-finish/page.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SamenNaarDeFinish from '@/app/producten/samen-naar-de-finish/page';

// Mock the useCart hook
const mockAddItem = jest.fn();
const mockUseCart = {
  addItem: mockAddItem,
  state: {
    items: [],
    total: 0,
    itemCount: 0,
  },
};

jest.mock('@/contexts/CartContext', () => ({
  useCart: () => mockUseCart,
}));

describe('Samen naar de Finish Product Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders product information correctly', () => {
    render(<SamenNaarDeFinish />);
    
    expect(screen.getByText('Samen naar de finish')).toBeInTheDocument();
    expect(screen.getByText('€ 21,95')).toBeInTheDocument();
    expect(screen.getByText('9789090361345')).toBeInTheDocument();
    expect(screen.getByText('Hardcover')).toBeInTheDocument();
    expect(screen.getByText('37 blz.')).toBeInTheDocument();
  });

  test('renders breadcrumb navigation', () => {
    render(<SamenNaarDeFinish />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Producten')).toBeInTheDocument();
    expect(screen.getByText('Samen naar de finish')).toBeInTheDocument();
  });

  test('displays product description', () => {
    render(<SamenNaarDeFinish />);
    
    expect(screen.getByText(/Verbinding is de basis van goed contact/)).toBeInTheDocument();
  });

  test('shows quantity selector with default value 1', () => {
    render(<SamenNaarDeFinish />);
    
    const quantityInput = screen.getByDisplayValue('1');
    expect(quantityInput).toBeInTheDocument();
  });

  test('handles quantity increase', () => {
    render(<SamenNaarDeFinish />);
    
    const increaseButton = screen.getByText('+');
    const quantityInput = screen.getByDisplayValue('1');
    
    fireEvent.click(increaseButton);
    
    expect(quantityInput).toHaveValue(2);
  });

  test('handles quantity decrease', () => {
    render(<SamenNaarDeFinish />);
    
    const increaseButton = screen.getByText('+');
    const decreaseButton = screen.getByText('−');
    const quantityInput = screen.getByDisplayValue('1');
    
    // First increase to 2
    fireEvent.click(increaseButton);
    expect(quantityInput).toHaveValue(2);
    
    // Then decrease back to 1
    fireEvent.click(decreaseButton);
    expect(quantityInput).toHaveValue(1);
  });

  test('prevents quantity from going below 1', () => {
    render(<SamenNaarDeFinish />);
    
    const decreaseButton = screen.getByText('−');
    const quantityInput = screen.getByDisplayValue('1');
    
    fireEvent.click(decreaseButton);
    
    expect(quantityInput).toHaveValue(1);
  });

  test('adds correct quantity to cart', () => {
    render(<SamenNaarDeFinish />);
    
    const increaseButton = screen.getByText('+');
    const addToCartButton = screen.getByText('In Winkelwagen');
    
    // Increase quantity to 3
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    
    // Add to cart
    fireEvent.click(addToCartButton);
    
    // Should call addItem 3 times (once for each quantity)
    expect(mockAddItem).toHaveBeenCalledTimes(3);
    expect(mockAddItem).toHaveBeenCalledWith({
      id: 1,
      title: "Samen naar de finish",
      price: 21.95,
      image: "/images/samen-naar-de-finish.jpg",
      slug: "samen-naar-de-finish"
    });
  });

  test('resets quantity to 1 after adding to cart', () => {
    render(<SamenNaarDeFinish />);
    
    const increaseButton = screen.getByText('+');
    const addToCartButton = screen.getByText('In Winkelwagen');
    const quantityInput = screen.getByDisplayValue('1');
    
    // Increase quantity to 2
    fireEvent.click(increaseButton);
    expect(quantityInput).toHaveValue(2);
    
    // Add to cart
    fireEvent.click(addToCartButton);
    
    // Quantity should reset to 1
    expect(quantityInput).toHaveValue(1);
  });

  test('displays product details section', () => {
    render(<SamenNaarDeFinish />);
    
    expect(screen.getByText('Volledige beschrijving')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Melany Molenaar-Stroek & Marian Plat')).toBeInTheDocument();
    expect(screen.getByText('Nederlands')).toBeInTheDocument();
  });

  test('displays background information section', () => {
    render(<SamenNaarDeFinish />);
    
    expect(screen.getByText('Achtergrond informatie')).toBeInTheDocument();
    expect(screen.getByText('Wat maakt ons boekje therapeutisch?')).toBeInTheDocument();
  });

  test('shows preview functionality', () => {
    render(<SamenNaarDeFinish />);
    
    const previewButton = screen.getByText('Inkijken');
    expect(previewButton).toBeInTheDocument();
    
    fireEvent.click(previewButton);
    // The modal should open (testing the modal itself would require more complex setup)
  });

  test('handles direct quantity input', () => {
    render(<SamenNaarDeFinish />);
    
    const quantityInput = screen.getByDisplayValue('1');
    
    fireEvent.change(quantityInput, { target: { value: '5' } });
    
    expect(quantityInput).toHaveValue(5);
  });

  test('prevents invalid quantity input', () => {
    render(<SamenNaarDeFinish />);
    
    const quantityInput = screen.getByDisplayValue('1');
    
    // Try to set invalid quantity (0 or negative)
    fireEvent.change(quantityInput, { target: { value: '0' } });
    
    expect(quantityInput).toHaveValue(1); // Should reset to 1
  });
});