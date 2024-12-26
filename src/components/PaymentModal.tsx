import React from 'react';
import { X, Bitcoin, CreditCard } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    price: number;
  };
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, course }) => {
  if (!isOpen) return null;

  const handleMercadoPago = () => {
    // Aquí iría la integración con Mercado Pago
    console.log('Procesando pago con Mercado Pago');
  };

  const handleCrypto = () => {
    // Aquí iría la integración con pagos crypto
    console.log('Procesando pago con Crypto');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-fancy font-bold text-pink-500">Método de Pago</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={handleMercadoPago}
            className="w-full flex items-center justify-between p-4 border rounded-xl hover:border-pink-500 transition-colors"
          >
            <div className="flex items-center">
              <CreditCard className="h-6 w-6 text-pink-500 mr-3" />
              <span className="font-medium">Mercado Pago</span>
            </div>
            <span className="text-pink-500 font-bold">${course.price}</span>
          </button>
          
          <button
            onClick={handleCrypto}
            className="w-full flex items-center justify-between p-4 border rounded-xl hover:border-pink-500 transition-colors"
          >
            <div className="flex items-center">
              <Bitcoin className="h-6 w-6 text-pink-500 mr-3" />
              <span className="font-medium">Crypto</span>
            </div>
            <span className="text-pink-500 font-bold">${course.price}</span>
          </button>
        </div>
        
        <p className="mt-6 text-sm text-gray-500 text-center">
          Pago seguro y procesado al instante ✨
        </p>
      </div>
    </div>
  );
};