
'use client';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fjvoxvqkaswxuawtihkv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqdm94dnFrYXN3eHVhd3RpaGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNTA5MDIsImV4cCI6MjA2MjgyNjkwMn0.Au-98AsnBhzzoLoL5Ogr7h9eZldCtjd3rlRBljJ9FDY"
);

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const { data, error } = await supabase.from("orders").select("*");
      if (!error) setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>📦 Orders Dashboard</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <strong>{order.product_description}</strong> – Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
