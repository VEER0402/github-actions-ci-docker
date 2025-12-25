📦 GitHub Actions CI Pipeline – Node.js Application

This repository demonstrates a production-style Continuous Integration (CI) pipeline implemented using GitHub Actions.
The pipeline enforces quality gates using unit tests and ensures that only verified code progresses through the workflow.




🔧 Tech Stack

Node.js

Express

Jest & Supertest (unit testing)

GitHub Actions (CI)


📂 Repository Structure


<img width="1024" height="1024" alt="cigithub" src="https://github.com/user-attachments/assets/ffb5a0e3-7a2d-40e1-b2a4-e6d7283d53a3" />





🚀 CI Pipeline Overview

The CI pipeline is defined in:

.github/workflows/ci.yml



Pipeline Trigger

Automatically runs on every push to the main branch



Pipeline Stages

Checkout Source Code

Set up Node.js Environment

Install Dependencies

Run Unit Tests (Quality Gate)

If any test fails, the pipeline fails immediately, preventing faulty code from progressing further.




✅ Successful CI Execution

When the application behavior matches the expected test definitions:

All pipeline stages complete successfully

Unit tests pass

Workflow status turns GREEN

This confirms:

Correct application behavior

Proper CI configuration

Reproducible builds on ephemeral GitHub runners





❌ Failure Scenario (Quality Gate Validation)

To validate the robustness of the CI pipeline, a failure scenario was intentionally introduced:

The unit test expectation was modified to mismatch the actual application response

On the next commit:

The pipeline failed at the Run Unit Tests stage

GitHub Actions clearly reported the mismatch between expected and received values

This confirmed:

The CI pipeline correctly detects application-level issues

Failures are isolated to code behavior, not pipeline configuration

Faulty changes are blocked early in the delivery lifecycle





🔁 Recovery & Verification

After restoring the correct test expectation:

Unit tests passed locally

The fix was committed and pushed

The CI pipeline re-executed successfully and returned to GREEN

This completes the full CI lifecycle:
detect → block → fix → verify





🧪 Running the Project Locally

To run and validate the project locally:

1️⃣ Clone the Repository
git clone https://github.com/VEER0402/github-actions-ci-docker.git
cd github-actions-ci-docker

2️⃣ Install Dependencies
npm install

3️⃣ Run Unit Tests
npm test

4️⃣ (Optional) Run the Application
npm start





🧠 Key Engineering Practices Demonstrated

CI pipelines as quality gates

Clean, reproducible builds using ephemeral runners

Clear separation of application responsibility and CI responsibility

Failure-first validation to prevent defective releases

Incremental and controlled pipeline evolution





📌 Notes

node_modules is intentionally excluded from version control

All pipeline behavior is driven via committed source and configuration only

No manual intervention is required for CI execution




📄 License

This project is intended for demonstration and educational purposes.





✅ Project Status


Completed – CI pipeline implemented, validated, failed intentionally, and recovered successfully
