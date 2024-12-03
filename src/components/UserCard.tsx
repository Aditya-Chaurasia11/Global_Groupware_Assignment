import { Pencil, Trash2 } from 'lucide-react';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(user)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
        >
          <Pencil className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}