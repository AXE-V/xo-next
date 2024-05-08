'use client';
import { ButtonComponent, Buttons, State, SvgProps } from '@/types';
import {
  Button as NextButton,
  ButtonProps,
  Tooltip,
  TooltipProps,
  BadgeProps,
  Badge,
} from '@nextui-org/react';
import { FC, forwardRef } from 'react';

/**
 * @param btnProps
 * @param Icon
 * @param state
 * @param toolTip
 * @param badge
 * @returns Button
 */
export const Button: FC<ButtonComponent> = ({ children, btnProps, Icon, toolTip, badge }) => {
  return (
    <>
      {badge ? (
        <Badge {...badge}>
          <ButtonTooltipCheckerComponent btnProps={btnProps} Icon={Icon} toolTip={toolTip}>
            {children}
          </ButtonTooltipCheckerComponent>
        </Badge>
      ) : (
        <ButtonTooltipCheckerComponent btnProps={btnProps} Icon={Icon} toolTip={toolTip}>
          {children}
        </ButtonTooltipCheckerComponent>
      )}
    </>
  );
};

const ButtonTooltipCheckerComponent: FC<ButtonComponent> = ({
  children,
  toolTip,
  btnProps,
  Icon,
}) => {
  return (
    <>
      {toolTip ? (
        <Tooltip color="foreground" radius="sm" classNames={{ base: `font-medium` }} {...toolTip}>
          <NextButton
            variant="light"
            color="primary"
            {...btnProps}
            className={`data-[focus-visible=true]:outline-secondary ${btnProps?.className}`}>
            {Icon}
            {children}
          </NextButton>
        </Tooltip>
      ) : (
        <NextButton
          variant="light"
          color="primary"
          {...btnProps}
          className={`data-[focus-visible=true]:outline-secondary ${btnProps?.className}`}>
          {Icon}
          {children}
        </NextButton>
      )}
    </>
  );
};
