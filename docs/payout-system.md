---
title: Payout System
---


# Payout System

This page explains how payouts work on the platform, including how winnings are calculated, where funds come from, when payouts occur, and what happens in edge cases.

Our goal is to be transparent, fair, and fully peer-to-peer.

## 1. Core Principle: Peer-to-Peer Only

All payouts on the platform are peer-to-peer.

Winnings come only from users on the opposite side of a bet

The platform never pays winnings from a team or treasury wallet

No new tokens or funds are created for payouts

If no one takes the opposite side of a bet, there is no pool to win from.

## 2. How Winnings Are Calculated**

When a market resolves, payouts are calculated using a proportional model.

Each winning user receives:

Their original stake back

Plus a share of the opposing pool, scaled by the strength of the trend move

**Payout Formula**
**Profit = (UserStake / SameSidePool) × OpposingPool × TrendMultiplier**
**Total Payout = UserStake + Profit**

**Definitions**

UserStake — the amount you bet

SameSidePool — total amount bet on your side (UP or DOWN)

OpposingPool — total amount bet on the opposite side

TrendMultiplier — multiplier derived from the percentage change in the trend

## 3. Trend Multiplier (Important)

The trend percentage does NOT create money.

It is used only as a multiplier to determine how much of the opposing pool winners receive.

Larger trend movements → larger share of the opposing pool

Smaller movements → smaller share

All payouts are still limited to existing user funds

This ensures the system is always solvent.

## 4. Settlement Outcomes

When a market resolves, one of the following outcomes occurs:

✅ Winning Bet (With Opposing Liquidity)

If there are users on the opposite side:

Your stake is returned

You receive profit from the opposing pool

The bet is marked Settled

❌ Losing Bet

You lose part or all of your stake depending on the trend movement

Funds are transferred to winning users

The bet is marked Lost

Losses are proportional to trend movement — not always 100%.

⚪ No Opposing Bets → Refund

If no one bet against you:

There is no opposing pool

No profit can be generated

Your entire stake is refunded

The bet is marked Refunded

You cannot win without an opposing participant.

## 5. Queued Payouts (Liquidity Delay)

In some cases, a market may resolve correctly, but there may be temporary insufficient opposing liquidity to immediately pay all winners.

When this happens:

The bet is marked Queued

The profit amount owed is recorded

Funds are paid automatically once sufficient opposing liquidity becomes available

Key Points

Queued payouts do not use team funds

They are processed automatically

They are visible in the UI

Users are never charged or penalized

Queued payouts exist to protect the system from paying out more than the available opposing liquidity.

## 6. Refund Option for Queued Bets

If a payout remains queued:

Users may choose to withdraw their original stake

Withdrawing the stake cancels the queued profit

This provides flexibility without harming the system

This ensures users are never locked indefinitely.

## 7. Payout Timing

Payouts are processed in daily batches.

Markets resolve as soon as their timeframe ends

Winning bets are queued for payout

Transfers occur during the next payout cycle

Batching payouts:

Reduces network fees

Improves reliability

Keeps the system predictable

## Payout Schedule

Payouts on TrendX are processed in a **single daily batch**.

### ⏰ Payout Time
- **21:00 UTC** (daily)

All eligible winnings are included in the next payout batch after a bet has fully resolved.

### How payouts work
- Bets must be **fully resolved** (i.e. the selected timeframe has ended) before they are eligible for payout.
- Once resolved, payouts are **scheduled** for the next daily payout batch.
- If the opposing pool does not have sufficient free liquidity, the payout is **queued** and automatically processed once liquidity becomes available.

### Important notes
- Payouts are **not instant** and do not occur immediately at bet resolution.
- Only **one payout batch** is processed per day.
- Payout timing is fixed and predictable to ensure system stability and transparency.

### Example
- A bet resolves at **18:30 UTC**
- It will be included in the **21:00 UTC** payout batch the same day

If a bet resolves **after 21:00 UTC**, it will be paid in the **next day’s** payout batch.


## 8. Transparency & Safety

The payout system is designed so that:

The platform cannot become insolvent

Every payout is backed by real user funds

There are no discretionary or hidden payments

All outcomes follow deterministic rules

If there is no opposing liquidity, no one loses money unfairly.

## 9. Why This Model

This payout model:

Rewards accuracy and conviction

Penalizes overcrowded trades

Prevents infinite or artificial rewards

Matches real-world prediction and derivatives markets

It allows the platform to scale responsibly while remaining fair.

## 10. Summary

All payouts are peer-to-peer

Winnings come only from opposing users

Trend movement scales rewards but creates no money

No opposing bets → refund

Insufficient liquidity → queued payout

Daily payout cycles keep the system efficient

This approach ensures a sustainable, transparent, and fair marketplace.