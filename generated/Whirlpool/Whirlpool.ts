// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get surfAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EthRewardAdded extends ethereum.Event {
  get params(): EthRewardAdded__Params {
    return new EthRewardAdded__Params(this);
  }
}

export class EthRewardAdded__Params {
  _event: EthRewardAdded;

  constructor(event: EthRewardAdded) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ethReward(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Stake extends ethereum.Event {
  get params(): Stake__Params {
    return new Stake__Params(this);
  }
}

export class Stake__Params {
  _event: Stake;

  constructor(event: Stake) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SurfRewardAdded extends ethereum.Event {
  get params(): SurfRewardAdded__Params {
    return new SurfRewardAdded__Params(this);
  }
}

export class SurfRewardAdded__Params {
  _event: SurfRewardAdded;

  constructor(event: SurfRewardAdded) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get surfReward(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Whirlpool__getAllInfoForResult {
  value0: boolean;
  value1: Array<BigInt>;

  constructor(value0: boolean, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }
}

export class Whirlpool__userInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Whirlpool extends ethereum.SmartContract {
  static bind(address: Address): Whirlpool {
    return new Whirlpool("Whirlpool", address);
  }

  INITIAL_PAYOUT_INTERVAL(): BigInt {
    let result = super.call(
      "INITIAL_PAYOUT_INTERVAL",
      "INITIAL_PAYOUT_INTERVAL():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_INITIAL_PAYOUT_INTERVAL(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "INITIAL_PAYOUT_INTERVAL",
      "INITIAL_PAYOUT_INTERVAL():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  accSurfPerShare(): BigInt {
    let result = super.call(
      "accSurfPerShare",
      "accSurfPerShare():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_accSurfPerShare(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "accSurfPerShare",
      "accSurfPerShare():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  active(): boolean {
    let result = super.call("active", "active():(bool)", []);

    return result[0].toBoolean();
  }

  try_active(): ethereum.CallResult<boolean> {
    let result = super.tryCall("active", "active():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getAllInfoFor(_user: Address): Whirlpool__getAllInfoForResult {
    let result = super.call(
      "getAllInfoFor",
      "getAllInfoFor(address):(bool,uint256[12])",
      [ethereum.Value.fromAddress(_user)]
    );

    return new Whirlpool__getAllInfoForResult(
      result[0].toBoolean(),
      result[1].toBigIntArray()
    );
  }

  try_getAllInfoFor(
    _user: Address
  ): ethereum.CallResult<Whirlpool__getAllInfoForResult> {
    let result = super.tryCall(
      "getAllInfoFor",
      "getAllInfoFor(address):(bool,uint256[12])",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Whirlpool__getAllInfoForResult(
        value[0].toBoolean(),
        value[1].toBigIntArray()
      )
    );
  }

  initialSurfReward(): BigInt {
    let result = super.call(
      "initialSurfReward",
      "initialSurfReward():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_initialSurfReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "initialSurfReward",
      "initialSurfReward():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  initialSurfRewardPerDay(): BigInt {
    let result = super.call(
      "initialSurfRewardPerDay",
      "initialSurfRewardPerDay():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_initialSurfRewardPerDay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "initialSurfRewardPerDay",
      "initialSurfRewardPerDay():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastPayout(): BigInt {
    let result = super.call("lastPayout", "lastPayout():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastPayout(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lastPayout", "lastPayout():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  payoutNumber(): BigInt {
    let result = super.call("payoutNumber", "payoutNumber():(uint256)", []);

    return result[0].toBigInt();
  }

  try_payoutNumber(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("payoutNumber", "payoutNumber():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardAtPayout(_payoutNumber: BigInt): BigInt {
    let result = super.call(
      "rewardAtPayout",
      "rewardAtPayout(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_payoutNumber)]
    );

    return result[0].toBigInt();
  }

  try_rewardAtPayout(_payoutNumber: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardAtPayout",
      "rewardAtPayout(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_payoutNumber)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  startTime(): BigInt {
    let result = super.call("startTime", "startTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startTime", "startTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  surf(): Address {
    let result = super.call("surf", "surf():(address)", []);

    return result[0].toAddress();
  }

  try_surf(): ethereum.CallResult<Address> {
    let result = super.tryCall("surf", "surf():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  surfPool(): Address {
    let result = super.call("surfPool", "surfPool():(address)", []);

    return result[0].toAddress();
  }

  try_surfPool(): ethereum.CallResult<Address> {
    let result = super.tryCall("surfPool", "surfPool():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  timeUntilNextPayout(): BigInt {
    let result = super.call(
      "timeUntilNextPayout",
      "timeUntilNextPayout():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_timeUntilNextPayout(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "timeUntilNextPayout",
      "timeUntilNextPayout():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tito(): Address {
    let result = super.call("tito", "tito():(address)", []);

    return result[0].toAddress();
  }

  try_tito(): ethereum.CallResult<Address> {
    let result = super.tryCall("tito", "tito():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalPendingSurf(): BigInt {
    let result = super.call(
      "totalPendingSurf",
      "totalPendingSurf():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalPendingSurf(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalPendingSurf",
      "totalPendingSurf():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalStaked(): BigInt {
    let result = super.call("totalStaked", "totalStaked():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalStaked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalStaked", "totalStaked():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  uniswapRouter(): Address {
    let result = super.call("uniswapRouter", "uniswapRouter():(address)", []);

    return result[0].toAddress();
  }

  try_uniswapRouter(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniswapRouter",
      "uniswapRouter():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  unstakingFee(): BigInt {
    let result = super.call("unstakingFee", "unstakingFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_unstakingFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("unstakingFee", "unstakingFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unstakingFeeConvertToSurfAmount(): BigInt {
    let result = super.call(
      "unstakingFeeConvertToSurfAmount",
      "unstakingFeeConvertToSurfAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_unstakingFeeConvertToSurfAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unstakingFeeConvertToSurfAmount",
      "unstakingFeeConvertToSurfAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userInfo(param0: Address): Whirlpool__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Whirlpool__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_userInfo(
    param0: Address
  ): ethereum.CallResult<Whirlpool__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Whirlpool__userInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  weth(): Address {
    let result = super.call("weth", "weth():(address)", []);

    return result[0].toAddress();
  }

  try_weth(): ethereum.CallResult<Address> {
    let result = super.tryCall("weth", "weth():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _surf(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tito(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ActivateCall extends ethereum.Call {
  get inputs(): ActivateCall__Inputs {
    return new ActivateCall__Inputs(this);
  }

  get outputs(): ActivateCall__Outputs {
    return new ActivateCall__Outputs(this);
  }
}

export class ActivateCall__Inputs {
  _call: ActivateCall;

  constructor(call: ActivateCall) {
    this._call = call;
  }
}

export class ActivateCall__Outputs {
  _call: ActivateCall;

  constructor(call: ActivateCall) {
    this._call = call;
  }
}

export class AddEthRewardCall extends ethereum.Call {
  get inputs(): AddEthRewardCall__Inputs {
    return new AddEthRewardCall__Inputs(this);
  }

  get outputs(): AddEthRewardCall__Outputs {
    return new AddEthRewardCall__Outputs(this);
  }
}

export class AddEthRewardCall__Inputs {
  _call: AddEthRewardCall;

  constructor(call: AddEthRewardCall) {
    this._call = call;
  }
}

export class AddEthRewardCall__Outputs {
  _call: AddEthRewardCall;

  constructor(call: AddEthRewardCall) {
    this._call = call;
  }
}

export class AddSurfRewardCall extends ethereum.Call {
  get inputs(): AddSurfRewardCall__Inputs {
    return new AddSurfRewardCall__Inputs(this);
  }

  get outputs(): AddSurfRewardCall__Outputs {
    return new AddSurfRewardCall__Outputs(this);
  }
}

export class AddSurfRewardCall__Inputs {
  _call: AddSurfRewardCall;

  constructor(call: AddSurfRewardCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddSurfRewardCall__Outputs {
  _call: AddSurfRewardCall;

  constructor(call: AddSurfRewardCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class RecoverERC20Call extends ethereum.Call {
  get inputs(): RecoverERC20Call__Inputs {
    return new RecoverERC20Call__Inputs(this);
  }

  get outputs(): RecoverERC20Call__Outputs {
    return new RecoverERC20Call__Outputs(this);
  }
}

export class RecoverERC20Call__Inputs {
  _call: RecoverERC20Call;

  constructor(call: RecoverERC20Call) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RecoverERC20Call__Outputs {
  _call: RecoverERC20Call;

  constructor(call: RecoverERC20Call) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetUnstakingFeeCall extends ethereum.Call {
  get inputs(): SetUnstakingFeeCall__Inputs {
    return new SetUnstakingFeeCall__Inputs(this);
  }

  get outputs(): SetUnstakingFeeCall__Outputs {
    return new SetUnstakingFeeCall__Outputs(this);
  }
}

export class SetUnstakingFeeCall__Inputs {
  _call: SetUnstakingFeeCall;

  constructor(call: SetUnstakingFeeCall) {
    this._call = call;
  }

  get _unstakingFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _convertToSurfAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetUnstakingFeeCall__Outputs {
  _call: SetUnstakingFeeCall;

  constructor(call: SetUnstakingFeeCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class StakeForCall extends ethereum.Call {
  get inputs(): StakeForCall__Inputs {
    return new StakeForCall__Inputs(this);
  }

  get outputs(): StakeForCall__Outputs {
    return new StakeForCall__Outputs(this);
  }
}

export class StakeForCall__Inputs {
  _call: StakeForCall;

  constructor(call: StakeForCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class StakeForCall__Outputs {
  _call: StakeForCall;

  constructor(call: StakeForCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}