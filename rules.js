const rules = [
  "On the Dashboard page, the user can configure the quiz by providing the number of questions, number of answers per question, and names of the teams participating in the game.",
  "When the user clicks the 'Start Game' button, the game begins.",
  "The game starts with a coin toss to determine which player goes first. Let's assume Player A wins the coin toss and plays first.",
  "On the Quiz page, a question is displayed along with a set of possible answers.",
  "Each player takes turns guessing the correct answer. Player A guesses first.",
  "If Player A guesses the correct answer, the points associated with that answer are added to Player A's score.",
  "If Player A guesses the wrong answer, their chance is not changed, and their retry count decreases.",
  "Once Player A's retry count reaches 0, Player B wins and scores of both player adds up and get assigned to winning player B.",
  "Once the game ends user can either see all the remaining answers or play the game again by cicking on the respective buttons."
]
const terms = [
  "By using this quiz app, you agree to comply with and be bound by the following terms and conditions.",
  "This quiz app is intended for entertainment and educational purposes only.",
  "The content provided in the quiz questions and answers is for general knowledge and reference only. We do not guarantee the accuracy, completeness, or suitability of the content. Use the information at your own risk.",
  "The quiz questions and answers may be subject to change without notice. We reserve the right to modify, add, or remove questions or any part of the quiz content at any time.",
  "The user is responsible for providing accurate and up-to-date information while configuring the quiz, including the number of questions, number of answers per question, and team names.",
  "We do not collect or store any personal information of the users or participants of the quiz. Any data provided by the user during the quiz setup process is used solely for the purpose of running the quiz and is not shared with third parties.",
  "The start of the quiz is initiated by the user clicking the 'Start Game' button on the Dashboard page. Once the game starts, the order of play, coin toss, and other game mechanics are handled by the app and cannot be manipulated by the user.",
  "The scores and results displayed at the end of the quiz are based on the answers provided by the participants during the game. We are not responsible for any errors, technical issues, or discrepancies in the score calculation.",
  "The winner of the quiz is determined based on the final scores calculated by the app. In case of a tie, the app may either declare a tie or follow a tiebreaker rule as specified in the game setup.",
  "We reserve the right to suspend, terminate, or modify the quiz app or any part of it without prior notice. We shall not be liable for any loss or damage arising from such actions.",
  "By using this quiz app, you acknowledge that you have read, understood, and agreed to these terms and conditions."
]


export {
  rules,
  terms
}