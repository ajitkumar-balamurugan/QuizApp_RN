import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";

const QuizScreen = ({ navigation }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const quizQuestions = [
    {
      id: 1,
      question: "What is the Capital of France?",
      choices: ["Madrid", "Lisbon", "Paris", "London"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      choices: ["Saturn", "Jupiter", "Earth", "Venus"],
      correctAnswer: "Jupiter",
    },
    {
      id: 3,
      question: "What franchise does MS Dhoni represent in the IPL?",
      choices: ["KKR", "RCB", "MI", "CSK"],
      correctAnswer: "CSK",
    },
  ];

  const handleAnswerSelection = (questionId, choice) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: choice,
    }));
  };

  const handleQuizSubmit = () => {
    const score = calculateScore();
    navigation.navigate("Result", { score });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question) => {
      const selectedAnswer = selectedAnswers[question.id];
      if (selectedAnswer && selectedAnswer === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {quizQuestions.map((question) => (
          <View key={question.id} style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.question}</Text>
            {question.choices.map((choice) => (
              <Pressable
                key={choice}
                style={[
                  styles.choiceButton,
                  selectedAnswers[question.id] === choice &&
                    styles.selectedChoice,
                ]}
                onPress={() => handleAnswerSelection(question.id, choice)}
              >
                <Text>{choice}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </ScrollView>
      <Button title="Submit" onPress={handleQuizSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingBottom: 16,
  },
  questionContainer: {
    marginBottom: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  choiceButton: {
    borderWidth: 1,
    borderColor: "lightblue",
    padding: 12,
    marginBottom: 8,
  },
  selectedChoice: {
    backgroundColor: "lightblue",
  },
});

export default QuizScreen;
