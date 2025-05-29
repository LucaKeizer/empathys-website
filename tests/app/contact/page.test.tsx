// tests/app/contact/page.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '@/app/contact/page';

// Mock window.location.href
delete (window as any).location;
(window as any).location = { href: '' };

describe('Contact Page', () => {
  beforeEach(() => {
    (window as any).location.href = '';
  });

  test('renders contact form correctly', () => {
    render(<Contact />);
    
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Naam *')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-mail *')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Telefoonnummer')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Bericht')).toBeInTheDocument();
  });

  test('displays contact information', () => {
    render(<Contact />);
    
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Telefoon')).toBeInTheDocument();
    expect(screen.getByText('info@empathys.nl')).toBeInTheDocument();
    expect(screen.getByText('info@kinderpraktijkmelany.nl')).toBeInTheDocument();
    expect(screen.getByText('marianplat1973@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+31 6 5127 8117')).toBeInTheDocument();
    expect(screen.getByText('+31 6 5203 7753')).toBeInTheDocument();
  });

  test('validates required fields before sending', () => {
    render(<Contact />);
    
    const submitButton = screen.getByText('Verstuur');
    fireEvent.click(submitButton);
    
    expect(global.alert).toHaveBeenCalledWith(
      'Vul alstublieft alle verplichte velden in (Naam en E-mail)'
    );
  });

  test('allows form submission with valid data', () => {
    render(<Contact />);
    
    // Fill in form fields
    fireEvent.change(screen.getByPlaceholderText('Naam *'), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByPlaceholderText('E-mail *'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Telefoonnummer'), {
      target: { value: '+31 6 1234 5678' }
    });
    fireEvent.change(screen.getByPlaceholderText('Bericht'), {
      target: { value: 'Test message' }
    });
    
    const submitButton = screen.getByText('Verstuur');
    fireEvent.click(submitButton);
    
    // Should create mailto link
    expect((window as any).location.href).toContain('mailto:info@empathys.nl');
    expect((window as any).location.href).toContain('John%20Doe');
    expect((window as any).location.href).toContain('john@example.com');
    expect((window as any).location.href).toContain('Test%20message');
  });

  test('handles form input changes correctly', () => {
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText('Naam *');
    const emailInput = screen.getByPlaceholderText('E-mail *');
    
    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    expect(nameInput).toHaveValue('Test Name');
    expect(emailInput).toHaveValue('test@example.com');
  });

  test('renders breadcrumb navigation', () => {
    render(<Contact />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('displays page description', () => {
    render(<Contact />);
    
    expect(screen.getByText('Wil je in contact komen? We zouden graag van je horen. Zo kunt u ons bereiken')).toBeInTheDocument();
  });
});