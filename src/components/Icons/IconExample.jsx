/* Core Packages */
import React from 'react';

/* Utilites */
import { colors } from '../../utils';

/* Helper Components */
import { Card, Row, Col, Text, HoverActions, Clipboard } from '../';

/* Component Itself */
function IconExample (props) {
    const {
        color,
        slug,
        markup,
        children,
    } = props;

    return (
        <HoverActions
            styled
            styles={{ display: 'block', width: 'auto' }}
            actions={(
                <>
                    {(!slug) ? (null) : (
                        <Clipboard
                            styled
                            data-clipboard-text={slug}>
                            Copy Slug
                        </Clipboard>
                    )}
                    <Clipboard
                        styled
                        data-clipboard-text={markup}>
                        Copy Markup
                    </Clipboard>
                </>
            )}>
            <Card
                hover
                boxShadow
                styles={{
                    margin: '0 0 20px',
                    backgroundColor: ((color === 'translucid') ? colors.get('oil') : null),
                }}>
                <Row vertical="middle" horizontal="center">
                    <Col xs={!slug ? 12 : 4} sm={!slug ? 12 : 4} lg={!slug ? 12 : 3} styles={{ textAlign: 'center' }}>
                        {children}
                    </Col>
                    {(!slug) ? (null) : (
                        <Col xs={8} sm={8} lg={9}>
                            <Text bold small center color="mercury">
                                {slug}
                            </Text>
                        </Col>
                    )}
                </Row>
            </Card>
        </HoverActions>
    );
}

/* Exporting */
export default IconExample;
