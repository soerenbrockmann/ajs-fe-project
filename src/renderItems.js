export function renderItems({ id, state, type, message }) {
  return ` <div class="container">
  <div class="column">
  <div class="item">
    <div class="itemSpace">ID:</div>
    <div>${id}</div>
  </div>
  <div class="item">
    <div class="itemSpace">State:</div>
    <div>${state}</div>
  </div>
  </div>
  <div class="column">
  <div class="item">
    <div class="itemSpace">Type:</div>
    <div>${type}</div>
  </div>
  <div class="item">
    <div class="itemSpace">Message:</div>
    <div>${message}</div>
  </div>
  </div>
  <div class="buttons">
    <button class="itemSpaceBottom">Block</button>
      <button>Resolve</button>
  </div>
</div>  `;
}
