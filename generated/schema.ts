// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Approval_ extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Approval_ entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Approval_ entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Approval_", id.toString(), this);
  }

  static load(id: string): Approval_ | null {
    return store.get("Approval_", id) as Approval_ | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    return value.toBytes();
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class DelegateChanged_ extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DelegateChanged_ entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DelegateChanged_ entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DelegateChanged_", id.toString(), this);
  }

  static load(id: string): DelegateChanged_ | null {
    return store.get("DelegateChanged_", id) as DelegateChanged_ | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get delegator(): Bytes {
    let value = this.get("delegator");
    return value.toBytes();
  }

  set delegator(value: Bytes) {
    this.set("delegator", Value.fromBytes(value));
  }

  get fromDelegate(): Bytes {
    let value = this.get("fromDelegate");
    return value.toBytes();
  }

  set fromDelegate(value: Bytes) {
    this.set("fromDelegate", Value.fromBytes(value));
  }

  get toDelegate(): Bytes {
    let value = this.get("toDelegate");
    return value.toBytes();
  }

  set toDelegate(value: Bytes) {
    this.set("toDelegate", Value.fromBytes(value));
  }
}

export class DelegateVotesChanged_ extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save DelegateVotesChanged_ entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DelegateVotesChanged_ entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DelegateVotesChanged_", id.toString(), this);
  }

  static load(id: string): DelegateVotesChanged_ | null {
    return store.get(
      "DelegateVotesChanged_",
      id
    ) as DelegateVotesChanged_ | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get delegate(): Bytes {
    let value = this.get("delegate");
    return value.toBytes();
  }

  set delegate(value: Bytes) {
    this.set("delegate", Value.fromBytes(value));
  }

  get previousBalance(): BigInt {
    let value = this.get("previousBalance");
    return value.toBigInt();
  }

  set previousBalance(value: BigInt) {
    this.set("previousBalance", Value.fromBigInt(value));
  }

  get newBalance(): BigInt {
    let value = this.get("newBalance");
    return value.toBigInt();
  }

  set newBalance(value: BigInt) {
    this.set("newBalance", Value.fromBigInt(value));
  }
}

export class OwnershipTransferred_ extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save OwnershipTransferred_ entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OwnershipTransferred_ entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OwnershipTransferred_", id.toString(), this);
  }

  static load(id: string): OwnershipTransferred_ | null {
    return store.get(
      "OwnershipTransferred_",
      id
    ) as OwnershipTransferred_ | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}

export class Transfer_ extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfer_ entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfer_ entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfer_", id.toString(), this);
  }

  static load(id: string): Transfer_ | null {
    return store.get("Transfer_", id) as Transfer_ | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}
