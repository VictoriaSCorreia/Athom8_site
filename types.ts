
import React from 'react';

export interface IconProps {
  className?: string;
}

export type IconComponent = React.FC<IconProps>;

export interface MethodologyItem {
  title: string;
  description: string;
  Icon: IconComponent;
}

export interface SolutionItem {
  title: string;
  Icon: IconComponent;
}
