#!/usr/bin/env node

import chalk from 'chalk';
import chalkAniamtion from 'chalk-animation';
import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';

let xboxGamerTag;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome(){
  console.clear();
  console.log(chalk.blue('Welcome to the ' + chalk.cyan.bold('Hyperlands Quiz')));
  await sleep();
}

async function askName(){
    console.clear();
    const answers = await inquirer.prompt({
        name: 'xbox_gamertag',
        type: 'input',
        message: 'What is you xbox gamertag?',
        default(){
            return 'Steve69';
        },
    });
    xboxGamerTag = answers.xbox_gamertag;
}

async function question1(){
    console.clear();
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'What is the Hyperlands IP?',
        choices: [
            'play.hyperlandsmc.net',
            'play.hyperlands.net',
            'play.hyperlandsmc.com',
            'play.hyperlands.com',
        ],
    });
    if(answers.question_1 === 'play.hyperlandsmc.net'){
        await question2();
    } else {
        await lost();
    }
}

async function question2(){
    console.clear();
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'What is the least popular gamemode on Hyperlands',
        choices: [
            'Bedwars',
            'Skywars',
            'TheBridge',
            'Duels',
            'BuildUHC',
        ],
    });
    if(answers.question_2 === 'BuildUHC'){
        await question3();
    } else {
        await lost();
    }
}

async function question3(){
    console.clear();
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'Who is the owner of Hyperlands?',
        choices: [
            'Stodgy',
            'Demotism',
            'FreeGaemingHear',
            'FeeGamingHear',
            'FreeGamingHere',
            'FeeGamingHere',
        ],
    });
    if(answers.question_3 === 'FreeGamingHere'){
        await winner();
    } else {
        await lost();
    }
}

async function winner(){
    figlet(`GG, ${xboxGamerTag}`, function(err, data) {
        console.clear();
        console.log(gradient('cyan', 'blue')(data));
    });
}

async function lost(){
    figlet(`You lose. ${xboxGamerTag}`, function(err, data) {
        console.log(gradient('cyan', 'blue')(data));
    });
}

await welcome();
await askName();
await question1();