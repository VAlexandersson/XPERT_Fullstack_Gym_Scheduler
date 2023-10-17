import React from "react";
import Link from "../../components/Link";

const Admin = () => {
  return (
    <div>      
      <Link href="/">Dashboard</Link>
      <Link href="/faq" variant="body2"> {"FAQ"} </Link>
      <Link href="/other" variant="body2"> {"OTHER"} </Link>
      <Link href="/admin" variant="body2"> {"ADMIN"} </Link>
    </div>
  )
};
export default Admin;