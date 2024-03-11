import * as core from '@actions/core'

// impelment the github action that print the time in the console
async function run(): Promise<void> {
  try {
    let organization = core.getInput('organization')
    const token = core.getInput('token')
    const issue_number = core.getInput('issue_number')

    // If organization is not provided, use the current one
    if (!organization) {
      organization = process.env.GITHUB_REPOSITORY?.split('/')[0] || ''
    }

    core.info(`Organization: ${organization}`)
    core.info(`Token: ${token}`)
    core.info(`Issue number: ${issue_number}`)
  } catch (error) {
    const errorMessage = (error as Error).message
    core.setFailed(errorMessage)
  }
  return
}

run()
