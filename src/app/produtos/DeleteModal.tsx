import React from 'react';
 
interface ConfirmDeleteModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}
 
const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ open, onClose, onConfirm }) => {
    if (!open) return null;
 
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg z-10">
                <h3 className="text-lg font-bold">Excluir Produto</h3>
                <p>Você tem certeza que deseja excluir este produto?</p>
                <div className="mt-4 flex justify-end">
                    <button className="btn btn-light mr-2" onClick={onClose}>Cancelar</button>
                    <button className="btn btn-danger" onClick={onConfirm}>Excluir</button>
                </div>
            </div>
        </div>
    );
};
 
export default ConfirmDeleteModal;
 