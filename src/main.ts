import * as core from '@actions/core'
import * as github from '@actions/github'


// impelment the github action that print the time in the console
async function run() {
  try {
    const time = (new Date()).toTimeString()
    core.setOutput("time", time)
    core.info(`The time is ${time}`)
  } catch (error) {
    let errorMessage = (error as Error).message;
    core.setFailed(errorMessage);
  }
}