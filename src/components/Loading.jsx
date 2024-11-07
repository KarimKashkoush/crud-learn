import React from 'react'

export default function Loading({ children, loading, error }) {
      return (
            <>
                  {loading ?
                        <tr>
                              <td colSpan={3}>please wait is loading......</td>
                        </tr>
                        : error ?
                              <tr>
                                    <td colSpan={3}>{error}</td>
                              </tr>
                              : children
                  }
            </>
      )
}
