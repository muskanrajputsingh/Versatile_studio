// CSS animations for floating cards
export const floatingAnimationsCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
  
  @keyframes float-down {
    0% { 
      transform: translateY(-300px) translateX(0px);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% { 
      transform: translateY(400px) translateX(0px);
      opacity: 0;
    }
  }
  
  @keyframes float-solution-left {
    0% { 
      transform: translateY(0px) translateX(0px);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% { 
      transform: translateY(300px) translateX(-30px);
      opacity: 0;
    }
  }
  
  @keyframes float-solution-right {
    0% { 
      transform: translateY(0px) translateX(0px);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% { 
      transform: translateY(300px) translateX(40px);
      opacity: 0;
    }
  }
  
  @keyframes float-solution-center {
    0% { 
      transform: translateY(40px) translateX(0px);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% { 
      transform: translateY(300px) translateX(0px);
      opacity: 0;
    }
  }
  
  .animate-float-1 {
    animation: float-down 10s linear infinite;
    animation-delay:0s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(-300px);
  }
  
  .animate-float-2 {
    animation: float-down 10s linear infinite;
    animation-delay: 1.2s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(-300px);
  }
  
  .animate-float-3 {
    animation: float-down 10s linear infinite;
    animation-delay: 2.4s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(-300px);
  }
  
  .animate-float-4 {
    animation: float-down 10s linear infinite;
    animation-delay: 3.6s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(-300px);
  }
  
  .animate-float-5 {
    animation: float-down 10s linear infinite;
    animation-delay: 4.8s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(-300px);
  }
  
  .animate-float-6 {
    animation: float-down 10s linear infinite;
    animation-delay: 6.0s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(-300px);
  }
  
  .animate-float-7 {
    animation: float-down 10s linear infinite;
    animation-delay: 7.2s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(-300px);
  }
  
  .animate-float-8 {
    animation: float-down 10s linear infinite;
    animation-delay: 8.4s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(-300px);
  }
  
  .animate-solution-1 {
    animation: float-solution-left 8s linear infinite;
    animation-delay: 0s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(40px);
  }
  
  .animate-solution-2 {
    animation: float-solution-right 8s linear infinite;
    animation-delay: 2s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(40px);
  }
  
  .animate-solution-3 {
    animation: float-solution-center 8s linear infinite;
    animation-delay: 4s;
    animation-fill-mode: both;
    opacity: 0;
    transform: translateY(40px);
  }
  
  .glow-button {
    position: relative;
    background: transparent;
    border: 2px solid white;
    color: white;
    font-weight: 600;
    padding: 16px 32px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .glow-button:hover {
    color: white;
    border-color: rgba(139, 92, 246, 0.3);
  }
  
  /* Animated border lines */
  .border-line {
    position: absolute;
    background: rgba(139, 92, 246, 1);
    transition: all 100ms ease;
  }
  
  .border-top {
    left: 0;
    top: -2px;
    height: 2px;
    width: 0;
  }
  
  .border-right {
    right: -2px;
    top: 0;
    width: 2px;
    height: 0;
    transition-delay: 100ms;
  }
  
  .border-bottom {
    bottom: -2px;
    right: 0;
    height: 2px;
    width: 0;
    transition-delay: 200ms;
  }
  
  .border-left {
    left: -2px;
    bottom: 0;
    width: 2px;
    height: 0;
    transition-delay: 300ms;
  }
  
  .glow-button:hover .border-top {
    width: 100%;
  }
  
  .glow-button:hover .border-right {
    height: 100%;
  }
  
  .glow-button:hover .border-bottom {
    width: 100%;
  }
  
  .glow-button:hover .border-left {
    height: 100%;
  }
`
