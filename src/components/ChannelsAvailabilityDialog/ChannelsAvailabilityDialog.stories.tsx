import { channelsList } from "@saleor/channels/fixtures";
import { createChannelsData } from "@saleor/components/ChannelsAvailability";
import Decorator from "@saleor/storybook/Decorator";
import { storiesOf } from "@storybook/react";
import React from "react";

import ChannelsAvailabilityDialog, {
  ChannelsAvailabilityDialogProps
} from "./ChannelsAvailabilityDialog";

const props: ChannelsAvailabilityDialogProps = {
  channels: createChannelsData(channelsList),
  confirmButtonState: "default",
  isSelected: () => undefined,
  onChange: () => undefined,
  onClose: () => undefined,
  onConfirm: () => undefined,
  open: true,
  title: "Channels"
};

storiesOf("Generics / ChannelsAvailabilityDialog", module)
  .addDecorator(Decorator)
  .add("default", () => <ChannelsAvailabilityDialog {...props} />);
