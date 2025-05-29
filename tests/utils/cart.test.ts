// tests/utils/cart.test.ts

// Cart utility functions for testing
export const calculateTotal = (items: Array<{ price: number; quantity: number }>): number => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

export const calculateItemCount = (items: Array<{ quantity: number }>): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

export const formatPrice = (price: number): string => {
  return `€ ${price.toFixed(2)}`;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePostalCode = (postalCode: string): boolean => {
  // Dutch postal code format: 1234 AB
  const dutchPostalRegex = /^\d{4}\s?[A-Z]{2}$/i;
  return dutchPostalRegex.test(postalCode);
};

// Tests
describe('Cart Utility Functions', () => {
  describe('calculateTotal', () => {
    test('calculates total for single item', () => {
      const items = [{ price: 21.95, quantity: 1 }];
      expect(calculateTotal(items)).toBe(21.95);
    });

    test('calculates total for multiple quantities of same item', () => {
      const items = [{ price: 21.95, quantity: 3 }];
      expect(calculateTotal(items)).toBe(65.85);
    });

    test('calculates total for multiple different items', () => {
      const items = [
        { price: 21.95, quantity: 2 },
        { price: 15.00, quantity: 1 },
        { price: 10.50, quantity: 3 }
      ];
      expect(calculateTotal(items)).toBe(90.40);
    });

    test('returns 0 for empty cart', () => {
      expect(calculateTotal([])).toBe(0);
    });

    test('handles decimal calculations correctly', () => {
      const items = [{ price: 21.95, quantity: 2 }];
      expect(calculateTotal(items)).toBe(43.90);
    });
  });

  describe('calculateItemCount', () => {
    test('counts items correctly for single item', () => {
      const items = [{ quantity: 3 }];
      expect(calculateItemCount(items)).toBe(3);
    });

    test('counts items correctly for multiple items', () => {
      const items = [
        { quantity: 2 },
        { quantity: 1 },
        { quantity: 4 }
      ];
      expect(calculateItemCount(items)).toBe(7);
    });

    test('returns 0 for empty cart', () => {
      expect(calculateItemCount([])).toBe(0);
    });
  });

  describe('formatPrice', () => {
    test('formats price correctly with 2 decimals', () => {
      expect(formatPrice(21.95)).toBe('€ 21.95');
    });

    test('adds trailing zeros for whole numbers', () => {
      expect(formatPrice(25)).toBe('€ 25.00');
    });

    test('handles single decimal places', () => {
      expect(formatPrice(21.5)).toBe('€ 21.50');
    });

    test('handles zero price', () => {
      expect(formatPrice(0)).toBe('€ 0.00');
    });
  });

  describe('validateEmail', () => {
    test('validates correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
      expect(validateEmail('info@empathys.nl')).toBe(true);
    });

    test('rejects invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
      expect(validateEmail('user@')).toBe(false);
      expect(validateEmail('user@domain')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('validatePostalCode', () => {
    test('validates correct Dutch postal codes', () => {
      expect(validatePostalCode('1234 AB')).toBe(true);
      expect(validatePostalCode('1131 DM')).toBe(true);
      expect(validatePostalCode('1234AB')).toBe(true); // Without space
    });

    test('rejects invalid postal codes', () => {
      expect(validatePostalCode('123 AB')).toBe(false); // Too few digits
      expect(validatePostalCode('12345 AB')).toBe(false); // Too many digits
      expect(validatePostalCode('1234 A')).toBe(false); // Too few letters
      expect(validatePostalCode('1234 ABC')).toBe(false); // Too many letters
      expect(validatePostalCode('ABCD EF')).toBe(false); // Letters instead of numbers
      expect(validatePostalCode('')).toBe(false);
    });
  });
});