import clsx from "clsx";
import { Text } from "..";
import { NoteRemove } from "iconsax-react";

type Props = {
  text?: string;
  className?: string;
  iconSize?: number;
  iconColor?: string;
};
const Empty = (props: Props) => {
  const { text, className, iconSize, iconColor } = props;
  const classes = clsx("w-full", className ? className : "");
  return (
    <div className={classes}>
      <div className="w-full text-center">
        <NoteRemove
          size={iconSize ?? 48}
          color={iconColor ?? "#777"}
          className="mx-auto"
        />
        <Text className="!text-lg">{text ? text : " Nothing found"}</Text>
      </div>
    </div>
  );
};

export default Empty;
