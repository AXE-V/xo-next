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
        <Tooltip {...toolTip}>
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

// не работает
// export const Button = forwardRef<HTMLButtonElement, ButtonComponent>((props, ref) => {
//   const { children, btnProps, Icon, toolTip, badge, dropdownTrigger } = props;
//   const buttonProps = dropdownTrigger
//     ? {
//         ref,
//         variant: 'light',
//         color: 'primary',
//         className: `data-[focus-visible=true]:outline-secondary ${btnProps?.className}`,
//         ...btnProps,
//       }
//     : {
//         ref,
//         variant: 'light',
//         color: 'primary',
//         className: `data-[focus-visible=true]:outline-secondary ${btnProps?.className}`,
//         ...btnProps,
//       };

//   return (
//     <>
//       {badge ? (
//         <Badge {...badge}>
//           <ButtonTooltipCheckerComponent
//             dropdownTrigger={dropdownTrigger}
//             btnProps={buttonProps}
//             Icon={Icon}
//             toolTip={toolTip}>
//             {children}
//           </ButtonTooltipCheckerComponent>
//         </Badge>
//       ) : (
//         <ButtonTooltipCheckerComponent
//           dropdownTrigger={dropdownTrigger}
//           btnProps={buttonProps}
//           Icon={Icon}
//           toolTip={toolTip}>
//           {children}
//         </ButtonTooltipCheckerComponent>
//       )}
//     </>
//   );
// });

// const ButtonTooltipCheckerComponent = forwardRef<HTMLButtonElement, ButtonComponent>(
//   (props, ref) => {
//     const { children, toolTip, btnProps, Icon, dropdownTrigger } = props;
//     return (
//       <>
//         {toolTip ? (
//           <Tooltip {...toolTip}>
//             <NextButton
//               ref={ref}
//               {...btnProps}
//               {...(dropdownTrigger && { 'data-dropdown-trigger': true })}>
//               {Icon}
//               {children}
//             </NextButton>
//           </Tooltip>
//         ) : (
//           <NextButton
//             ref={ref}
//             {...btnProps}
//             {...(dropdownTrigger && { 'data-dropdown-trigger': true })}>
//             {Icon}
//             {children}
//           </NextButton>
//         )}
//       </>
//     );
//   },
// );
