import * as styles from './formSection.scss'

import * as React from 'react'
import { Formik, FormikProps, Form } from 'formik'

import { ScrollReveal } from 'commons/atoms/scrollReveal'
import { TextInput } from 'commons/atoms/inputs'
import { Title } from 'commons/atoms/title'
import { Button } from 'commons/atoms/button'
import { Modal } from 'commons/atoms/modal'

import { validationSchema } from './validation'

type FormData = {
  fullName: string
  email: string
  password: string
}

type State = {
  showModal: boolean
}

export class FormSection extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    showModal: false
  }

  onClose = () => this.setState({ showModal: false })

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.children}>
          <ScrollReveal slideFrom="bottom">
            <Title
              className={styles.title}
              label="contact us"
              description="over 1000 designers are using"
              hasEllipsis={true}
              invertedColors={true}
            />
          </ScrollReveal>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              fullName: '',
              email: '',
              password: ''
            }}
            onSubmit={(_values: FormData) => {
              this.setState({ showModal: true })
            }}
            render={(formState: FormikProps<FormData>) => {
              function handleSubmit(e: React.MouseEvent) {
                e.preventDefault()

                formState
                  .validateForm()
                  .then(errorObject => console.error('errorObject ', errorObject))
                  .catch(err => console.error(err))

                formState.submitForm()
              }

              return (
                <ScrollReveal slideFrom="left">
                  <Modal onClose={this.onClose} showModal={this.state.showModal}>
                    <div className={styles.modal}>
                      <span className={styles.emoji}>🤾</span> in your face
                    </div>
                  </Modal>
                  <Form className={styles.form}>
                    <TextInput<FormData> name="fullName" placeholder="Name" />
                    <TextInput<FormData> name="email" placeholder="email" />
                    <TextInput<FormData> name="password" placeholder="password" />
                    <Button
                      isSubmit={true}
                      className={styles.submitButton}
                      onClick={handleSubmit}
                      label="try now"
                      disabled={formState.isSubmitting}
                    />
                  </Form>
                  <span className={styles.info}>
                    By signing up you agree to our terms & Services.
                  </span>
                </ScrollReveal>
              )
            }}
          />
        </div>
      </div>
    )
  }
}
