import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  LinearProgress,
  Collapse,
} from '@mui/material';

import { useHandleUrl } from '.';

const options = ['매우 아니다', '아니다', '보통이다', '그렇다', '매우 그렇다'];

const questions = [
  '나는 혼자있기를 좋아한다.',
  '주기적으로 새로운 친구를 만든다.',
  '자유 시간 중 상당 부분을 다양한 관심사를 탐구하는 데 할애한다.',
  '다른 사람이 울고 있는 모습을 보면 자신도 울고 싶어질 때가 많다.',
  '일이 잘못될 때를 대비해 여러 대비책을 세우는 편이다.',
  '압박감이 심한 환경에서도 평정심을 유지하는 편이다.',
  '파티나 행사에서 새로운 사람에게 먼저 자신을 소개하기보다는 주로 이미 알고 있는 사람과 대화하는 편이다.',
];

export default function Test() {
  const handleUrl = useHandleUrl();

  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse(false);
    setTimeout(() => setCollapse(true), 500);
  };

  const [number, setNumber] = useState(0);
  const onNext = () => {
    if (number < questions.length - 1) {
      setNumber(number + 1);
    } else {
      handleUrl('result');
    }
    handleCollapse();
  };
  const onPrev = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
    handleCollapse();
  };

  const [answers, setAnswers] = useState(
    Array.from({ length: questions.length }, (_, i) => null)
  );
  const onAnswer = (e) => {
    const { name, value } = e.target;

    setAnswers(
      answers.map((answer, index) =>
        index === parseInt(name) ? value : answer
      )
    );

    onNext();
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  useEffect(() => {
    setCollapse(true);
  }, []);

  return (
    <Box>
      <Box sx={{ mt: 3, width: '360px', mx: 'auto' }}>
        <LinearProgress
          variant="determinate"
          value={(number / questions.length) * 100}
        />
      </Box>
      <Collapse in={collapse} sx={{ justifyContent: 'center' }}>
        <Question number={number} onAnswer={onAnswer} />
      </Collapse>
      <Box sx={{ mt: 3, pt: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleUrl('start')}
        >
          start로 돌아가기
        </Button>
        <Button onClick={onPrev} variant="contained">
          이전 문항으로 돌아가기
        </Button>
      </Box>
    </Box>
  );
}

function Question({ number, onAnswer }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" textAlign="center" sx={{ pb: 5 }}>
        {questions[number]}
      </Typography>

      <Box sx={{ width: '15rem', m: 'auto' }}>
        {options.map((option, i) => (
          <Button
            key={i}
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            name={number}
            value={i}
            onClick={onAnswer}
          >
            {option}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
