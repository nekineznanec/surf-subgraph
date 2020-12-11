import { Address, BigDecimal, BigInt, log } from "@graphprotocol/graph-ts"
import {
  TokenContract,
  Approval,
  DelegateChanged,
  DelegateVotesChanged,
  OwnershipTransferred,
  Transfer
} from "../generated/TokenContract/TokenContract"
import { Approval_, DelegateChanged_, DelegateVotesChanged_, OwnershipTransferred_, Transfer_ } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let entity = Approval_.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new Approval_(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleDelegateChanged(event: DelegateChanged): void {
  let entity = DelegateChanged_.load(event.params.delegator.toHex())

  if (entity == null) {
    entity = new DelegateChanged_(event.params.delegator.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.delegator = event.params.delegator
  entity.fromDelegate = event.params.fromDelegate
  entity.toDelegate = event.params.toDelegate
  entity.save()
}

export function handleDelegateVotesChanged(event: DelegateVotesChanged): void {
  let entity = DelegateVotesChanged_.load(event.params.delegate.toHex())

  if (entity == null) {
    entity = new DelegateVotesChanged_(event.params.delegate.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.delegate = event.params.delegate
  entity.previousBalance = event.params.previousBalance
  entity.newBalance = event.params.newBalance
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = Transfer_.load(event.params.from.toHex())

  if (entity == null) {
    entity = new Transfer_(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}