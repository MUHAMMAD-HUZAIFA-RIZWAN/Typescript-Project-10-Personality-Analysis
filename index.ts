import inquirer from 'inquirer';

class PersonAnalyzer {
  private  answers: Record<string, string>;

  constructor() {
    this.answers = {};
  }

  async startAnalysis() {
    await this.askQuestions();
    this.analyzeBehavior();
  }

  private async askQuestions() {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'list',
        name: 'activity',
        message: 'Do you enjoy outdoor activities?',
        choices: ['Yes', 'No'],
      },
      {
        type: 'list',
        name: 'socializing',
        message: 'Do you enjoy socializing with others?',
        choices: ['Yes', 'No'],
      },
    ];

    this.answers = await inquirer.prompt(questions);
  }

  private analyzeBehavior() {
    const name = this.answers.name;
    const enjoysOutdoorActivities = this.answers.activity === 'Yes';
    const enjoysSocializing = this.answers.socializing === 'Yes';

    if (enjoysOutdoorActivities && enjoysSocializing) {
      console.log(`${name} is an extrovert.`);
    } else if (!enjoysOutdoorActivities && !enjoysSocializing) {
      console.log(`${name} is an introvert.`);
    } else {
      console.log(`${name} is a mystery.`);
    }
  }
}

const analyzer = new PersonAnalyzer();
analyzer.startAnalysis();
