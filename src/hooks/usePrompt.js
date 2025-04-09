import { useCallback, useContext, useEffect, useState } from "react";
import {
  UNSAFE_NavigationContext as NavigationContext,
  useBlocker,
  useNavigate,
  useNavigation
} from "react-router-dom";

function useBlocker1(blocker, when = true) {

  useEffect(() => {
    if (!when) return;

    const unblock = navigator.block((tx) => {
      const autoUnblock = () => unblock();
      blocker({ ...tx, retry: autoUnblock });
    });

    return unblock;
  }, [navigator, blocker, when]);

}

export function usePrompt(when, onConfirm, onCancel) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [retryNav, setRetryNav] = useState(null);
  const navigation = useNavigation();

  // const blk = useBlocker(when);
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (when) {
        e.preventDefault();
        console.log('unload', e);

        e.returnValue = 'asda';
      }
    };

    const blocker = (tx) => {
      const nextUrl = tx.location.pathname;
      console.log("React Router will navigate to:", nextUrl);
    };
    // navigator.block(blocker);
    console.log('navigation', navigation);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [when, navigation]);

  // console.log('blk', blk);

  const blocker = useCallback(
    (tx) => {
      setShowPrompt(true);
      setRetryNav(() => () => {
        tx.retry();
      });
    },
    []
  );

  // useBlocker(blocker, when);

  const confirm = () => {
    setShowPrompt(false);
    retryNav?.();
  };

  const cancel = () => {
    setShowPrompt(false);
    setRetryNav(null);
    onCancel?.();
  };

  return {
    showPrompt,
    confirm,
    cancel,
  };
}
