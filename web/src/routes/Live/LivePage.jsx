import { Button, Typography } from "@mui/material"
import { useState } from "react"
import { ConnectionManager } from "../../components/ConnectionManager"
import { BatteryInfo, FactoryMode, RideBehavior } from "."
import { useTranslation } from "react-i18next"
import { Box } from "@mui/system"
import { DeviceName } from "./DeviceName"

export const LivePage = () => {
  const [showFactoryMode, setShowFactoryMode] = useState(false)
  const { t } = useTranslation("live")
  return (
    <ConnectionManager title={t("title")} subheader={t("subheader")}>
      <DeviceName />
      <BatteryInfo />
      <RideBehavior />
      {showFactoryMode ? (
        <FactoryMode />
      ) : (
        <Button
          onClick={() => setShowFactoryMode(true)}
          variant="outlined"
          sx={{ my: 2 }}
        >
          {t("actions.showFactoryMode")}
        </Button>
      )}
    </ConnectionManager>

    
  )
}

