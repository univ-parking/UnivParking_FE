import React, { useRef, useEffect } from 'react';

const TestCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // 초기 Canvas 크기
    const initialWidth = 397.5;
    const initialHeight = 645;

    // 비율 계산
    const aspectRatio = initialWidth / initialHeight;

    // Canvas 크기 조정 함수
    const resizeCanvas = () => {
      // 브라우저의 현재 width와 height 가져오기
      const { clientWidth, clientHeight } = document.documentElement;

      // 비율을 유지하면서 Canvas 크기 조정
      if (clientWidth / clientHeight > aspectRatio) {
        canvas.width = clientHeight * aspectRatio;
        canvas.height = clientHeight;
      } else {
        canvas.width = clientWidth;
        canvas.height = clientWidth / aspectRatio;
      }

      // TODO: Canvas에 그리기
      // 예를 들어, 가운데에 원 그리기
      context.fillStyle = 'blue';
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
      context.fill();
    };

    // 초기 한 번 호출하여 Canvas를 현재 브라우저 크기로 설정
    resizeCanvas();

    // 브라우저 크기가 변경될 때마다 Canvas 크기 조정
    window.addEventListener('resize', resizeCanvas);

    // 컴포넌트 언마운트 시에 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때만 실행

  return <canvas ref={canvasRef} />;
};

export default TestCanvas;
