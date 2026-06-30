import React, { useEffect, useState } from 'react'
import "./Orders.css"
import { useStateValue } from './StateProvider';
import { db } from "./firebase";
import Order from "./Order"

import { collection, doc, query, orderBy, onSnapshot } from "firebase/firestore";

function Orders() {
    const [{ user }, dispatch] = useStateValue(); // dispatch unused, but keeping your structure
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!user) {
        setOrders([]);
            return;
        }

    const q = query(
      collection(doc(db, "users", user.uid), "orders"),
      orderBy("created", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setOrders(
        snapshot.docs.map((d) => ({
          id: d.id,
          data: d.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="orders">
        <h1>Your Orders</h1>

        <div className="orders__order">
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>
      
    </div>
  )
}

export default Orders
