import { takeLatest, all, call, put } from "redux-saga/effects";

import { userActionTypes } from "./user.types";

import {
  signInFailure,
  signOutFailure,
  setCurrentUser,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";

import {
  getCurrentUser,
  createUserProfileDocument,
  auth,
} from "../../firebase/firebase.utils";

// END OF IMPORTS

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    const userRef = yield createUserProfileDocument(userAuth);
    const userSnapshot = yield userRef.get();
    yield put(
      setCurrentUser({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
    yield signUpSuccess();
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userRef = yield createUserProfileDocument(user, { displayName });
    const userSnapshot = yield userRef.get();
    yield put(
      setCurrentUser({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

// Declancheurs

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

// Listen On

export function* userSagas() {
  yield all([
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
