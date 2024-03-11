import * as core from '@actions/core'

// impelment the github action that print the time in the console
async function run(): Promise<void> {
  try {
    const time = new Date().toTimeString()
    core.setOutput('time', time)
    core.info(`The time is ${time}`)
  } catch (error) {
    const errorMessage = (error as Error).message
    core.setFailed(errorMessage)
  }
  return
}

run()
