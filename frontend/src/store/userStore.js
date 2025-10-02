import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * User Store - Manages user state and role switching
 *
 * UX/UI Considerations:
 * - Persistent state across page refreshes
 * - Role switching for personalized experience
 * - User preferences management
 */
const useUserStore = create(
  persist(
    (set, get) => ({
      // State
      user: {
        name: 'Jens Nielsen',
        email: 'jens@email.dk',
        initials: 'JN',
        role: 'borger', // 'borger' or 'politiker'
      },

      preferences: {
        theme: 'light',
        notifications: true,
        language: 'da',
      },

      // Actions
      setUserRole: (role) => {
        set((state) => ({
          user: { ...state.user, role }
        }));
      },

      updateUser: (userData) => {
        set((state) => ({
          user: { ...state.user, ...userData }
        }));
      },

      updatePreferences: (prefs) => {
        set((state) => ({
          preferences: { ...state.preferences, ...prefs }
        }));
      },

      // Computed values
      isBorger: () => get().user.role === 'borger',
      isPolitiker: () => get().user.role === 'politiker',
    }),
    {
      name: 'user-storage', // localStorage key
      partialize: (state) => ({
        user: state.user,
        preferences: state.preferences
      }),
    }
  )
);

export default useUserStore;
