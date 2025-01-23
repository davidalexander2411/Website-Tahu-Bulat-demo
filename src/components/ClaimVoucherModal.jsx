import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const ClaimVoucherModal = ({ user, onClose }) => {
  const handleClaimVoucher = async () => {
    const voucherCode = `${user.user_metadata.username}b1g1`;
    
    await navigator.clipboard.writeText(voucherCode);
    
    alert(`Voucher Code: ${voucherCode} (Copied to clipboard)\nUse on your next visit!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
      <div className="bg-white p-8 rounded-lg max-w-md w-full text-center relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl"
        >
          ×
        </button>
        <h2 className="text-2xl figtree-bold mb-4">Claim Your B1G1 Voucher!</h2>
        <div className="bg-[rgb(254,215,0)] p-4 rounded-md mb-4">
            <p className="text-black text-xl font-bold">{`${user.user_metadata.username}b1g1`}</p>
            <p className="text-black">Use code on your next visit</p>
        </div>
        <button 
          onClick={handleClaimVoucher}
          className="w-full bg-black text-[rgb(254,215,0)] py-2 rounded-md hover:opacity-90"
        >
          CLAIM VOUCHER
        </button>
      </div>
    </div>
  );
};

export default ClaimVoucherModal;