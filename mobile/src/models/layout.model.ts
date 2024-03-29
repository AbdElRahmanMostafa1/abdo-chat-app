type TContainerVariant = 'container' | 'stretched' | 'none';

interface IFooterBtn {
  label: string;
  loading?: boolean;
  disable?: boolean;
  /** A boolean value to use TextButton instead of normal Button component */
  isTextButton?: boolean;
  onPress: () => void;
}

type TFooterDirection = 'row' | 'col';
type TBottomVariant = 'none' | 'default';
interface IMainLayoutProps {
  /** Container paddingHorizontal variant to match figma */
  containerVariant?: TContainerVariant;
  children: React.ReactNode;
  /** Pass custom header to be used at your screen */
  header?: React.ReactNode;
  /** Pass custom footer to be used at your screen */
  footer?: React.ReactNode;
  /** footerOption property is used to add a footer with primaryBtn and optional secondaryBtn */
  footerOption?: {
    primaryBtn: IFooterBtn;
    secondaryBtn?: IFooterBtn;
    /** The footer(buttons) direction, the default value is column */
    footerDirection?: TFooterDirection;
  };
  /** A boolean value to make the header fixed, if false it will be scrolled */
  isHeaderFixed?: boolean;
  onScroll?: () => void;
  scrollEnabled?: boolean;
}

export type {
  IMainLayoutProps,
  TContainerVariant,
  TFooterDirection,
  TBottomVariant,
};
