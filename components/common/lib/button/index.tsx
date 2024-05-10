'use client';
import { ButtonComponent, Buttons, State, SvgProps } from '@/types';
import { Button, ButtonProps, Tooltip, TooltipProps, BadgeProps, Badge } from '@nextui-org/react';
import { FC, forwardRef } from 'react';

/**
 * @param btnProps
 * @param Icon
 * @param state
 * @param toolTip
 * @param badge
 * @returns Button
 */
export const CButton = forwardRef<HTMLButtonElement, ButtonComponent>(
  ({ children, badge, ...other }, ref) => {
    return (
      <>
        {badge ? (
          <Badge {...badge}>
            <ButtonTooltipCheckerComponent ref={ref} {...other}>
              {children}
            </ButtonTooltipCheckerComponent>
          </Badge>
        ) : (
          <ButtonTooltipCheckerComponent ref={ref} {...other}>
            {children}
          </ButtonTooltipCheckerComponent>
        )}
      </>
    );
  },
);

const ButtonTooltipCheckerComponent = forwardRef<HTMLButtonElement, ButtonComponent>(
  ({ toolTip, children, btnProps, Icon }, ref) => {
    return (
      <>
        {toolTip ? (
          <Tooltip color="foreground" radius="sm" classNames={{ base: `font-medium` }} {...toolTip}>
            <Button
              ref={ref}
              variant="light"
              color="primary"
              {...btnProps}
              className={`data-[focus-visible=true]:outline-secondary ${btnProps?.className}`}>
              {Icon}
              {children}
            </Button>
          </Tooltip>
        ) : (
          <Button
            ref={ref}
            variant="light"
            color="primary"
            {...btnProps}
            className={`data-[focus-visible=true]:outline-secondary ${btnProps?.className}`}>
            {Icon}
            {children}
          </Button>
        )}
      </>
    );
  },
);
