import React from 'react';
import { Link } from 'react-router-dom';

const navigation = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a href="#" class="navbar-brand">
          The Bike Shop
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">
              Cyclist
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navigation;
