import {  Link, useNavigation } from "react-router-dom";

export function DashboardPage() {

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li><a href="/add">Add Product</a></li>
        <li><Link to="/detail/1">Detail Product 1</Link></li>
        <li><a href="/detail/2">Detail Product 2</a></li>
      </ul>
    </div>
  );
}