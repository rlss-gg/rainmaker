import BaseError from "./BaseError"

export default class WrongChannelTypeError extends BaseError {
  public constructor(channelId: string) {
    super(`The channel '${channelId}' is the wrong type of channel`)
  }
}
