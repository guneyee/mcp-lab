---
title: "Password Reset Flow"
type: story
status: draft
sync:
  jira:
    url: "https://guneyk.atlassian.net/browse/MCPW-2"
    issue_key: "MCPW-2"
    synced_at: "2026-05-07T23:09:00Z"
---

# STORY-002: Password Reset Flow

## Description
As a user, I want to reset my password via email so that I can regain access to my account if I forget my password.

## Acceptance Criteria

### AC1: Request Password Reset
- Given I am on the login page
- When I click "Forgot password" and submit a registered email
- Then I see a confirmation message that reset instructions were sent

### AC2: Reset Link Security
- Given a password reset email is sent
- When I open the reset link
- Then the token is valid for 15 minutes and can be used only once

### AC3: Set New Password
- Given I open a valid reset link
- When I submit a new password that meets policy requirements
- Then my password is updated and I can log in with the new password

### AC4: Handle Invalid or Expired Token
- Given I open an invalid or expired reset link
- When the reset page loads
- Then I see an error message and an option to request a new reset email

### AC5: Audit and Notification
- Given a password reset is completed successfully
- When the system finalizes the reset
- Then a security notification email is sent and an audit log entry is created

## Technical Notes
- Use signed, single-use reset tokens stored with expiration
- Enforce password policy: minimum 8 chars, uppercase, lowercase, number, symbol
- Rate limit reset requests to 3 per hour per email and IP
- Do not reveal whether an email is registered in user-facing responses
