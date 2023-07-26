<div class="loader">
  <span
    class="loading-text"
  >
    <span class="letter"
      >L</span
    >
    <span class="letter"
      >o</span
    >
    <span class="letter"
      >a</span
    >
    <span class="letter"
      >d</span
    >
    <span class="letter"
      >i</span
    >
    <span class="letter"
      >n</span
    >
    <span class="letter"
      >g</span
    >
  </span>
  <div
    class="dot-container"
  >
    <div class="dot" />
    <div class="dot" />
    <div class="dot" />
  </div>
</div>

<style>
  .loader {
    display: flex;
    align-items: center;
    font-family: Arial,
      sans-serif;
    font-size: 2em;
    color: #333;
    font-weight: 1000;
  }

  .dot-container {
    display: flex;
    align-items: center;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #333;
    margin: 0 5px;
    animation: jump 1.5s
      infinite;
  }

  .dot:nth-child(1) {
    animation-delay: 2s;
  }

  .dot:nth-child(2) {
    animation-delay: 2.25s;
  }

  .dot:nth-child(3) {
    animation-delay: 2.5s;
  }

  .letter {
    display: inline-block;
    animation: jump 1.5s
      infinite;
  }

  .letter:nth-child(1) {
    animation-delay: 0.25s;
  }

  .letter:nth-child(2) {
    animation-delay: 0.5s;
  }

  .letter:nth-child(3) {
    animation-delay: 0.75s;
  }

  .letter:nth-child(4) {
    animation-delay: 1s;
  }

  .letter:nth-child(5) {
    animation-delay: 1.25s;
  }

  .letter:nth-child(6) {
    animation-delay: 1.5s;
  }

  .letter:nth-child(7) {
    animation-delay: 1.75s;
  }

  @keyframes jump {
    0% {
      transform: translateY(
        0
      );
    }
    50% {
      transform: translateY(
        -15px
      );
    }
    100% {
      transform: translateY(
        0
      );
    }
  }
</style>
