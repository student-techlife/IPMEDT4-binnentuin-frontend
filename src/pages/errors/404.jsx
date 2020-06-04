import React from "react";

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h3>De pagina kan niet worden gevonden</h3>
      <small>Keer snel terug naar de </small>
      <Link to="/">homepage</Link>
    </div>
  );
}

export default NotFoundPage;