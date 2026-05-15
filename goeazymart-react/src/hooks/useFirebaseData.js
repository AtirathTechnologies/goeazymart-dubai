import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

export const useFirebaseData = () => {
  const [data, setData] = useState({
    products: [],
    categories: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const rootRef = ref(db);
    
    const unsubscribe = onValue(rootRef, (snapshot) => {
      const val = snapshot.val();
      if (val) {
        setData({
          products: val.products || [],
          categories: val.categories || [],
          loading: false,
          error: null
        });
      } else {
        setData(prev => ({ ...prev, loading: false }));
      }
    }, (err) => {
      setData(prev => ({ ...prev, loading: false, error: err }));
    });

    return () => unsubscribe();
  }, []);

  return data;
};
