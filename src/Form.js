import React from "react";
import './Form.css';

export default function Form() {
  return (
    <form>
      <div class="row">
        <div class="col">
          <input
            class="form-control form-control"
            id="city-input"
            type="search"
            placeholder="Please enter a city here!"
            autocomplete="off"
          />
        </div>
        <div class="col">
          <button type="submit" class="btn btn-primary" id="search">
            🔎
          </button>
          <button type="button" class="btn btn-secondary" id="locator">
            🧭
          </button>
        </div>
      </div>
    </form>
  );
}