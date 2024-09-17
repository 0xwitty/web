import {
  Box,
  Button,
  Card,
  CircularProgress,
  Icon,
  Switch,
  Tooltip,
  VStack,
} from '@chakra-ui/react'
import type { TradeQuote, TradeQuoteStep } from '@shapeshiftoss/swapper'
import { useCallback, useMemo } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { FaRotateRight } from 'react-icons/fa6'
import { useTranslate } from 'react-polyglot'
import { Row } from 'components/Row/Row'
import { Text } from 'components/Text'
import { AllowanceType } from 'hooks/queries/useApprovalFees'
import { useToggle } from 'hooks/useToggle/useToggle'
import { selectHopExecutionMetadata } from 'state/slices/tradeQuoteSlice/selectors'
import { HopExecutionState, TransactionExecutionState } from 'state/slices/tradeQuoteSlice/types'
import { useAppSelector } from 'state/store'

import { SharedApprovalStep } from './SharedApprovalStep/SharedApprovalStep'
import type { RenderAllowanceContentCallbackParams } from './SharedApprovalStep/types'
import { ApprovalStatusIcon } from './StatusIcon'

export type ApprovalStepProps = {
  tradeQuoteStep: TradeQuoteStep
  hopIndex: number
  isActive: boolean
  isLastStep?: boolean
  isLoading?: boolean
  activeTradeId: TradeQuote['id']
}

const initialIcon = <FaRotateRight />

export const ApprovalStep = ({
  tradeQuoteStep,
  hopIndex,
  isActive,
  isLoading,
  activeTradeId,
}: ApprovalStepProps) => {
  const translate = useTranslate()

  const [isExactAllowance, toggleIsExactAllowance] = useToggle(true)

  const hopExecutionMetadataFilter = useMemo(() => {
    return {
      tradeId: activeTradeId,
      hopIndex,
    }
  }, [activeTradeId, hopIndex])
  const { state, approval } = useAppSelector(state =>
    selectHopExecutionMetadata(state, hopExecutionMetadataFilter),
  )

  const stepIndicator = useMemo(() => {
    return (
      <ApprovalStatusIcon
        hopExecutionState={state}
        approvalTxState={approval.state}
        initialIcon={initialIcon}
        overrideCompletedStateToPending
      />
    )
  }, [approval.state, state])

  const renderResetAllowanceContent = useCallback(
    ({
      hopExecutionState,
      transactionExecutionState,
      isAllowanceApprovalLoading,
      handleSignAllowanceApproval,
    }: RenderAllowanceContentCallbackParams) => {
      // only render the approval button when the component is active and we don't yet have a tx hash
      if (!isActive) return

      const isAwaitingApproval = hopExecutionState === HopExecutionState.AwaitingApproval
      const isDisabled =
        isAllowanceApprovalLoading ||
        !isAwaitingApproval ||
        transactionExecutionState !== TransactionExecutionState.AwaitingConfirmation

      return (
        <Card p='2' width='full'>
          <VStack width='full'>
            <Row px={2}>
              <Row.Label display='flex' alignItems='center'>
                <Text color='text.subtle' translation='trade.allowance' />
                <Tooltip label={translate('trade.allowanceTooltip')}>
                  <Box ml={1}>
                    <Icon as={FaInfoCircle} color='text.subtle' fontSize='0.7em' />
                  </Box>
                </Tooltip>
              </Row.Label>
              <Row.Value textAlign='right' display='flex' alignItems='center'>
                <Text
                  color={isExactAllowance ? 'text.subtle' : 'white'}
                  translation='trade.unlimited'
                  fontWeight='bold'
                />
                <Switch
                  size='sm'
                  mx={2}
                  isChecked={isExactAllowance}
                  disabled={isDisabled}
                  onChange={toggleIsExactAllowance}
                />
                <Text
                  color={isExactAllowance ? 'white' : 'text.subtle'}
                  translation='trade.exact'
                  fontWeight='bold'
                />
              </Row.Value>
            </Row>
            <Button
              width='full'
              size='sm'
              colorScheme='blue'
              isDisabled={isDisabled}
              isLoading={isAllowanceApprovalLoading}
              onClick={handleSignAllowanceApproval}
            >
              {transactionExecutionState !== TransactionExecutionState.AwaitingConfirmation && (
                <CircularProgress isIndeterminate size={2} mr={2} />
              )}
              {translate('common.approve')}
            </Button>
          </VStack>
        </Card>
      )
    },
    [isActive, translate, isExactAllowance, toggleIsExactAllowance],
  )

  return (
    <SharedApprovalStep
      tradeQuoteStep={tradeQuoteStep}
      hopIndex={hopIndex}
      isLoading={isLoading}
      activeTradeId={activeTradeId}
      hopExecutionState={state}
      transactionExecutionState={approval.state}
      titleTranslation='trade.approvalTitle'
      errorTranslation='trade.approvalFailed'
      gasFeeLoadingTranslation='trade.approvalGasFeeLoading'
      gasFeeTranslation='trade.approvalGasFee'
      stepIndicator={stepIndicator}
      renderContent={renderResetAllowanceContent}
      allowanceType={isExactAllowance ? AllowanceType.Exact : AllowanceType.Unlimited}
      feeQueryEnabled={isActive}
    />
  )
}
